const getTodos = async () => {
    await fetch('http://localhost:3000/api/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching todos:', error);
    });
}
export default getTodos;