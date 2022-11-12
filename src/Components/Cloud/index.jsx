import React,{useState,useEffect} from 'react'
import { TagCloud } from 'react-tagcloud'


const SimpleCloud = ({val,item,func}) => {
const [values, setvalues] = useState([])
const feautures = ["airport", "terminal", "check in","security", "queue", "experience", "toilets", "shop"]
    useEffect(() => {
        let iterator=item[`${feautures[val]}`]?.remarks
        // console.log(item[`${feautures[val]}`]?.remarks);
        if (item[`${feautures[val]}`]?.remarks.length == 0){
            iterator=item[`${feautures[val]}`]?.neutal_points
            if (iterator.length==0){
                iterator=item[`${feautures[val]}`]?.good_points
            }
        }
      setvalues(
        iterator?.map((i)=>({
            value:i,
            count:Math.floor(Math.random() * 50)
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
        func(res);
    }
    return(
  <TagCloud
    minSize={18}
    maxSize={40}
    tags={values}
    key={12}
    onClick={(tag)=>deliver_new(tag.value)}
  />
)
}
    
export default SimpleCloud;