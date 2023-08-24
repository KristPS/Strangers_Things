export default function MyPostsCard({ post }) {
    //TODO show messages once send message is functional
    const { _id, title, author, description, location, price, willDeliver, messages} = post;
    // const [showForm, setShowForm] = useState(false)
    return (
      <div className="myPostsCard" key={_id}>
        <h1>{title}</h1>
        <p>Description: {description}</p>
        <p>Price: {price} Location: {location} Will Deliver: {willDeliver ? "Yes" : "No"}</p>
        {/* <p>{messages.map()}</p> */}
        <button>Edit</button>
        <button>Delete</button>
        {
           // make button function to show message form below post. 
           // must be logged in to send message
        }
      </div>
    )
  }