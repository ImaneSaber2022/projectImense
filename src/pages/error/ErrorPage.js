import React from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
function ErrorPage() {
  return (
    <div>
    <div class="d-flex flex-column flex-root" id="kt_app_root">
 
    
    <div class="d-flex flex-column flex-center flex-column-fluid">
 
        <div class="d-flex flex-column flex-center text-center p-10">
          
            <div class="card card-flush w-lg-650px py-5">
                <div class="card-body py-15 py-lg-20">
                
                    <h1 class="fw-bolder fs-2hx text-gray-900 mb-4">Oops!</h1>
               
                    <div class="fw-semibold fs-6 text-gray-500 mb-7">We can't find that page.</div>
                  
                    <div class="mb-3">
                    <SVG src={toAbsoluteUrl("/img/404-error-dark.png")} />
                      </div>
                 
                    <div class="mb-0">
                      <Link to={'/'} ><button class="btn btn-sm btn-primary"  >Return Home</button></Link> 
                    </div>
               
                </div>
            </div>
         
        </div>
  
    </div>
    
</div>
    </div>
  )
}

export default ErrorPage
