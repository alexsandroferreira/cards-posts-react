export function PostButton({ text, onClick }) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}