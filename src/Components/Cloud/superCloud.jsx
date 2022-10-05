import React,{useState,useEffect} from 'react'
import { TagCloud } from 'react-tagcloud'
const data = [
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'MongoDB', count: 18 },
  { value: 'CSS3', count: 20 },
]

const SimpleCloud = ({item}) => {
const [values, setvalues] = useState([{}])
console.log(item);
    useEffect(() => {
      setvalues(
        item?.map((i)=>({
            value:i,
            count:Math.floor(Math.random() * 5)
        }))
      )
    }, [])
    const deliver_new= async(tag)=>{
        const res=await fetch("/api/comments",{
            method:'POST',
            body:JSON.stringify({tag}),
            mode:"cors",
            headers: {"Content-type":"application/json;charset=utf-8"}
        }).then((r)=>r.json())
        console.log(res);
    }
    return(
  <TagCloud
    minSize={18}
    maxSize={40}
    tags={values}
    key={values[Math.random(10)]}
    onClick={(tag)=>deliver_new(tag.value)}
  />
)
}
export default SimpleCloud;