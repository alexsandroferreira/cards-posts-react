import './styles.css'

export function PostInputText({ searchValue, handleChange }) {
  return (
    <input
      className='text-input'
      value={searchValue}
      onChange={handleChange}
      type="search"
      placeholder='Pesquise seu post...'
    />

  )
}