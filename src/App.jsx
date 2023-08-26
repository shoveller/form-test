import "./App.css";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    // getAll 메소드를 쓰면 배열요소의 값을 가져올 수 있다.
    const check = formData.getAll("check");
    // 이 방법은 배열을 다룰 수 없다.
    const data = Object.fromEntries(formData.entries());
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={onSubmit}>
      <input defaultValue="123" name="email" type="text" />
      <input name="check" type="checkbox" />
      <input name="check" type="checkbox" />
      <button type="submit">서브밋</button>
      <button type="reset">리셋</button>
    </form>
  );
}

export default App;
