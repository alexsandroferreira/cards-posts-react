import './styles.css'
export function PostButton({ text, onClick,disabled }) {
    return (
        <button className='post-button' 
        disabled={disabled}
        onClick={onClick}>
            {text}
        </button>
    )
}