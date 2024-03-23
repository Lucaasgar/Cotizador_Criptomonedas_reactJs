
const Error = ({children}) => {
  return (
    <div
        className="bg-red-700 text-white py-4 text-xl uppercase font-bold text-center rounded-lg"
    >
        {children}
    </div>
  )
}

export default Error