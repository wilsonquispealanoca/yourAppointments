function Container({children}) {
  return (
    <div className="container mx-auto px-5 lg:px-32 flex-wrap">
      {children}
    </div>
  );
}

export default Container;