import React,{useState,useEffect} from 'react'
import { TagCloud } from 'react-tagcloud'


const SimpleCloud = ({item,val,aiport}) => {
const [values, setvalues] = useState([])
const [index, setindex] = useState([])
// console.log(item);
    useEffect(() => {
      const cloudValues= item?.map((i)=>({
            value:i,
            count:Math.floor(Math.random() * 5)
        }))
      setvalues(cloudValues)
      const temp=[];
      item?.map((i,j)=>{
        temp.push(j)
      })
      setindex(temp)
      console.log(index);
    }, [item])
    const deliver_new= async(tag)=>{
        const res=await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/comments/${aiport}`,{
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