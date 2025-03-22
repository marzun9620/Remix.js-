import type { MetaFunction } from "@remix-run/node";
import { request } from './../../node_modules/@jspm/core/src-browser/http';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action= async ({request}:{request: Request})=>{  
  return {
    redirect: "/users"
  }
}
export default function Index() {
  return (
   <div>
    <div>
      <h1>
        
etert
       
      </h1>
    </div>
   </div>
  );
}


