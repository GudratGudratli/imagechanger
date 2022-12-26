const App = () => {
  const handleClick = (event, message) => {
    // const selectedImg = useRef("img")
    console.log(event.target);
    console.log(message);
    console.log('clicked');
  };

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1590273466070-40c466b4432d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBmb3Jlc3R8ZW58MHx8MHx8&w=1000&q=80"
        alt="forest"
        onClick={
          (event) => handleClick(event, 'hello World')
        }
      />
    </div>
  );
};
export default App;