'use client'

import { useState } from "react"
import styles from './Input.module.css'

// Props for Input component
type InputProps = {
	type?: 'text' | 'password' | 'number' // input type
	value?: string // initial value
	placeholder?: string // placeholder text
	clearable?: boolean // show clear button
	onChange?: (value: string) => void // callback when input changes
}


export const Input = ({
	type = 'text',
	value = '',
	placeholder,
	clearable = false,
	onChange,
}: InputProps) => {
	// State to toggle password visibility
	const [showPassword, setShowPassword] = useState(false);

	// State to store the input value
	const [inputValue, setInputValue] = useState(value);

	// Determine actual input type: show password as text if toggled
	const actualType = type === 'password' && showPassword ? "text" : type

	// Update input value and call onChange prop if provided
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
		onChange?.(e.target.value)
	}

	return (
		<div className={styles.wrapper}>
			<input
				type={actualType}
				value={inputValue}
				placeholder={placeholder}
				onChange={handleChange}
				className={styles.input}
			/>

			{type === 'password' && (
				<button
					className={`${styles.icon} ${styles.passwordIcon}`}
					onClick={() => setShowPassword(!showPassword)}
				>
					👁
				</button>
			)}

			{clearable && inputValue && (
				<button
					className={`${styles.icon} ${styles.clearIcon}`}
					onClick={() => setInputValue('')}
				>
					✕
				</button>
			)}

		</div>
	)
}
