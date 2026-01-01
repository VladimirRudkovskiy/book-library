'use client'
import styles from './Toast.module.css'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";


// Props for Toast component
type ToastProps = {
	message: string // text to display
	type?: 'success' | 'error' | 'info' // toast style
	duration?: number // auto-dismiss duration in ms
	onClose?: () => void // callback when toast closes
}

export const Toast = ({
	message,
	type = 'info',
	duration = 3000,
	onClose
}: ToastProps) => {

	// State controlling toast visibility
	const [visible, setVisible] = useState(true);

	// Auto-dismiss effect
	useEffect(() => {
		if (!duration) return;
		const timer = setTimeout(() => {
			setVisible(false); // hide toast
			onClose?.(); // notify parent
		}, duration);
		return () => clearTimeout(timer);
	}, []);

	// Don't render if toast is hidden
	if (!visible) return null;

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					className={`${styles.toast} ${styles[type]}`}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
				>
					<span>{message}</span>
					{onClose && (
						<button
							type="button"
							onClick={() => { setVisible(false); onClose?.(); }}
						>
							✕
						</button>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	)
}
