const Product=require('./modle/product')


const arr=[
    {
        title:"camera",
        img:"https://images.unsplash.com/photo-1612548403247-aa2873e9422d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
        price:2000,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"shoes",
        img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D",
        price:400,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"girl top",
        img:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
        price:800,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"man combo",
        img:"https://images.unsplash.com/photo-1467043237213-65f2da53396f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        price:5000,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"jacket",
        img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        price:1200,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"t-shirt",
        img:"https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        price:3000,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"girl's hudi",
        img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
        price:5000,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"smartphone",
        img:"https://images.unsplash.com/photo-1596558450268-9c27524ba856?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        price:4000,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"iphone",
        img:"https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
        price:2000,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    },
    {
        title:"earbuds",
        img:"https://images.unsplash.com/photo-1631176093617-63490a3d785a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGVsZWN0cm9uaWNzJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
        price:2000,
        desc:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a"
    }
]

function seed(){
    Product.insertMany(arr)
    .then(()=>{
        console.log("DB seeded");
    })
    .catch((e)=>{
        console.log("DB not seeded");
        console.log(e.message);
    })
}

module.exports=seed;

