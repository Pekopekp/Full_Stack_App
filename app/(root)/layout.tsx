const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      <p>Navbar for root</p>
      {children}
    </div>
  )
}

export default layout
