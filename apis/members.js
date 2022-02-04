
const express=require('express');
const router=express.Router();
let member=require('../public/Members');
const uuid=require('uuid');
router.get('/',(req,res)=>{
    // logger();
    res.json(member);
})
router.get('/:id',(req,res)=>{
    // res.send(req.params.id);
    const found=member.some(member=>member.id===Number(req.params.id))
    if(found)
    res.json(member.filter(member=>member.id===Number(req.params.id)));
    else{
        res.status(400).json({msg:"Member Not Found"})
    }
})
// create member
router.post('/',(req,res)=>{
    // res.send(req.body)
    const newMember={
       id:uuid.v4(),
       name:req.body.name,
       email:req.body.email,
       status:"active"

    }
    // we cannot include else if we do so it will give some error related to headers like headers are included so forth.

     
    //    {res.status(400).json({msg:"Please include a name and email"})}
     
   member.push(newMember); console.log(member);
  if(!newMember.name || !newMember.email) 
  {
    res.status(400).json({msg:'email or name is missing', member})
  }
  else{
     res.send(member)
    }
    // res.send(member)
})
// Update Member
router.put('/:id',(req,res)=>{
    const found=member.some(memberr=>member.id===parseInt(req.params.id));
    if(found){
        const updmember=req.body;
        member.forEach(newmember=>{
            if(newmember.id===parseInt(req.params.id)){
              newmember.name=updmember.name?updmember.name:req.body.name  ;
              newmember.email=updmember.email?updmember.email:req.body.email;
               res.json({msg:"Member Updated ",newmember })
        }
    })
}

    else{
        res.status(400).json({msg:`doesnot exist ${req.params.id}`})
    }
})
module.exports=router;