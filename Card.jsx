
const userdata = [
  {
    name: "Jhon S",
    city: "New York",
    description: "Front-end developer",
    sks: ["HTML", "CSS", "JavaScript", "Reactjs", "Github", "Mysql", "Node"],
    profile:"images/11.jpeg",
  },
  {
    name: "Sam M",
    city: "California",
    description: "Full Stack developer",
    sks: ["HTML", "CSS", "JavaScript", "Reactjs", "Github", "Mongodb", "Node", "Expressjs"],
    profile: "images/2.jpg",
  },
  {
    name: "Mona K",
    city: "California",
    description: "Senoir software developer ",
    sks: ["C++", "Python", "JavaScript", "Tester", "Github", "Mongodb", "5+ year experience"],
    profile: "images/3.jpeg",
  },
];

export default userdata;

function User(props){
    return <div className="container">
       
       <img className="i" src={props.profile} alt="user"></img>
       <h2>{props.name}</h2>
       <h3>{props.city}</h3>
       <p className="des">{props.description}</p>
       <div className="buttons">
        <button className="pri">Message</button>
        <button classname="sec">Following</button>
       </div>
       <div>
        <h5>Skills</h5>
        <ul className="skills">
            {props.sks.map((sks,index)=>(<li key={index}>{sks}</li>))}
            </ul>
        
       </div>
    </div>
}
export const Card = () => {
  return (
    <>
    {
      userdata.map((user,index)=>(<User key={index} name={user.name}
      city={user.city} description={user.description} profile={user.profile}
      sks={user.sks}
      />))
    }
    </>
    // <div>
    //     <User name="Jhon S" city="Newyork" description="Front-end developer"
    //     sks={["HTML","CSS","javascript","Reactjs","Github","Mysql","Node"]} profile="images/11.jpeg" />

    // </div>
  );
};
