'use client'

import styles from './SideBar.module.css'
import { motion, AnimatePresence } from "framer-motion";

// Menu item type
export type MenuItemType = {
	label: string
	children?: MenuItemType[] // nested submenu
}

// Props for Sidebar
type SidebarMenuProps = {
	items: MenuItemType[] // menu items
	open: boolean // sidebar visibility
	onClose: () => void // callback when overlay clicked
}

// MenuItem component handles optional nested children
type MenuItemProps = {
	item: MenuItemType
}

const MenuItem = ({ item }: MenuItemProps) => {
	return (
		<div className={styles.menuItem}>
			<span>{item.label}</span>
			{item.children && (
				<div className={styles.submenu}>
					{item.children.map((child, i) => (
						<MenuItem key={i} item={child} />
					))}
				</div>
			)}
		</div>
	)
}

export const SideBar = ({ items, open, onClose }: SidebarMenuProps) => {
	return (
		<>
			<AnimatePresence>
				{open && (
					<>
						{/* Overlay */}
						<motion.div
							className={styles.overlay}
							onClick={onClose}
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						/>

						{/* Sidebar */}
						<motion.aside
							className={styles.sidebar}
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "tween", duration: 0.3 }}
						>
							{items.map((item, i) => (
								<MenuItem key={i} item={item} />
							))}
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
