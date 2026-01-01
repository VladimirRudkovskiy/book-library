'use client'

import { useState } from "react"
import styles from './Input.module.css'

type InputProps = {
	type?: 'text' | 'password' | 'number'
	value?: string
	placeholder?: string
	clearable?: boolean
	onChange?: (value: string) => void
}


export const Input = ({
	type = 'text',
	value = '',
	placeholder,
	clearable = false,
	onChange,
}: InputProps) => {

	const [showPassword, setShowPassword] = useState(false);
	const [inputValue, setInputValue] = useState(value);

	const actualType = type === 'password' && showPassword ? "text": type

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
				className={styles.icon}
				onClick={() => setShowPassword(!showPassword)}
				>
					👁
				</button>
			)}

			{clearable && inputValue && (
				<button
				className={styles.icon}
				onClick={() => setInputValue('')}
				>
					✕
				</button>
			)}

		</div>
	)
}
