import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading,setisLoading]=useState(false)
  const history=useHistory()
  const handlesubmit=(e)=>{
    e.preventDefault()
    setisLoading(true)
    const blog={title,body,author,topic}
    fetch('http://localhost:8000/blogs',{
      method: 'POST',//GET method is use to request resources from server and post method is used to add data on end point
      headers:{'Content-Type':"application/json"},//other types like content type are authentication & authorization,Encoding
      body:JSON.stringify(blog)
    }).then(()=>{
      console.log("New blog added!!!")
      setisLoading(false)
      history.push("/")//u can use history.go() method also if u write history.go(-1) then it go back one step if 1 then move to next step
    })
  }
  return (
    <div className="create">
      <h1>Add New Blog</h1>
      {/* Form */}
      <form onSubmit={handlesubmit}>
        <label>Select Topic</label>
        <select
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <option value="Web dev">Web Development</option>
          <option value="AIML">AIML</option>
          <option value="App dev">App Development</option>
        </select>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog Author</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <label>Blog body</label>
        <textarea 
        required 
        value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}></textarea>
        {!isLoading && <button>Publish Blog</button>}
        {isLoading && <button disabled>Publishing Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
