export default function ErrorMessage({ children }) {
  return (
    <div className="absolute text-red-600 text-sm mx-2 mt-1">{children}</div>
  )
}