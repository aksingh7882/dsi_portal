import React from 'react'

function Footer() {
  return (
    <>
        

<footer class="py-4 py-md-5" style={{backgroundColor:"black"}}>

  {/* <!-- Logo & SM  --> */}
  <div>
    <div class="container border-bottom border-dark pb-4">
      <div class="row gy-3 align-items-sm-center">
        <div class="col-12 col-sm-6">
          <div class="footer-logo-wrapper text-start">
            <a href="/">              
       <img src='https://theindiadeals.com/wp-content/uploads/2024/07/Indiadeals-Logo_-image-1-2048x1178.jpg' alt="india dealss logo" class="img-fluid" height={"70px"} width={"100px"} />
            </a>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="social-media-wrapper">
            <ul class="m-0 list-unstyled d-flex justify-content-sm-end gap-2">
              <li>
                <a href="#!" class="btn btn-outline-light bsb-btn-circle bsb-btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-facebook text-lightx" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#!" class="btn btn-outline-light bsb-btn-circle bsb-btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#!" class="btn btn-outline-light bsb-btn-circle bsb-btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#!" class="btn btn-outline-light bsb-btn-circle bsb-btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#!" class="btn btn-outline-light bsb-btn-circle bsb-btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
                    <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#!" class="btn btn-outline-light bsb-btn-circle bsb-btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Widgets Link - Component --> */}
  <section class="py-4 py-md-5 py-xl-7 py-xxl-10">
    <div class="container">
      <div class="row gy-4 gy-md-0">
        <div class="col-6 col-md-3">
          <div class="link-wrapper">
            <h4 class="mb-3 fw-bold fs-7 text-light">Land/Plots</h4>
            <ul class="m-0 list-unstyled">
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Accessibility Statement
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  ADA Compliance
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Assistive Technologies
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Accessibility Resources
                </a>
              </li>
              <li>
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Accessibility Standards
                </a>
              </li>
              <li>
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Design Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="link-wrapper">
            <h4 class="mb-3 fw-bold fs-7 text-light">Home</h4>
            <ul class="m-0 list-unstyled">
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Shop Now
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Product Categories
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  New Releases
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Exclusive Deals
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="link-wrapper">
            <h4 class="mb-3 fw-bold fs-7 text-light">Commercials</h4>
            <ul class="m-0 list-unstyled">
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Partners
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Affiliates
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Collaborations
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Strategic Alliances
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="link-wrapper">
            <h4 class="mb-3 fw-bold fs-7 text-light">Insights</h4>
            <ul class="m-0 list-unstyled">
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Contributions
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Community Engagement
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Donate
                </a>
              </li>
              <li class="mb-1">
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Volunteer Opportunities
                </a>
              </li>
              <li>
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Local Initiatives
                </a>
              </li>
              <li>
                <a href="#!" class="link-opacity-75 link-opacity-100-hover text-decoration-none fs-8 link-light">
                  Community Partnerships
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Copyright & Links  Component --> */}
  <div>
    <div class="container border-top border-dark pt-4">
      <div class="row gy-3 align-items-lg-center">
        <div class="col-12 col-lg-6 order-1 order-lg-0">
          <div class="copyright-wrapper d-block mb-1 fs-7 text-light text-start">
            © 2025. All Rights Reserved.
          </div>
          <div class="credit-wrapper d-block text-light fs-8 text-start">
             <a href="" class="link-opacity-0 link-opacity-75-hover link-light text-decoration-none text-primary">
              Indiadealss</a> Develop By <span class="text">Abhishek Singh</span>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="link-wrapper">
            <ul class="m-0 list-unstyled d-flex justify-content-centerX justify-content-lg-end gap-2 gap-md-3">
              <li>
                <a href="#!" class="link-underline-opacity-0 link-opacity-75-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#!" class="link-underline-opacity-0 link-opacity-75-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border">
                  Refund
                </a>
              </li>
              <li>
                <a href="#!" class="link-underline-opacity-0 link-opacity-75-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#!" class="link-underline-opacity-0 link-opacity-75-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#!" class="link-underline-opacity-0 link-opacity-75-hover link-offset-1 link-light fs-8 d-flex align-items-center">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>
    </>
  )
}

export default Footer
