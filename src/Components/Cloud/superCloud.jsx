import React,{useState,useEffect} from 'react'
import { TagCloud } from 'react-tagcloud'


const SimpleCloud = ({item,val}) => {
const [values, setvalues] = useState([{}])
const [index, setindex] = useState([])
// console.log(item);
    useEffect(() => {
      setvalues(
        item?.map((i)=>({
            value:i,
            count:Math.floor(Math.random() * 5)
        }))
      )
      const temp=[];
      item?.map((i,j)=>{
        temp.push(j)
      })
      setindex(temp)
    }, [])
    const deliver_new= async(tag)=>{
        const res=await fetch("/api/comments",{
            method:'POST',
            body:JSON.stringify({tag}),
            mode:"cors",
            headers: {"Content-type":"application/json;charset=utf-8"}
        }).then((r)=>r.json())
        val(res);
    }
    return(
  <TagCloud
    minSize={18}
    maxSize={40}
    tags={values}
    key={index}
    onClick={(tag)=>deliver_new(tag.value)}
  />
)
}
export default SimpleCloud;