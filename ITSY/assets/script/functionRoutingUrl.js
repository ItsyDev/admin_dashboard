function cardCoba() {
     history.pushState({}, "", "/tokopediaCard");
     document.getElementById('tokopedia').innerHTML =
          `
                     <div class="card_title">
                              <h3>Welcome, IJlal Naufal Hibrizi</h3>
                         </div>
                         <div class="box_card mt-5 mb-3">
                              <div class="row w-100 text-center ms-0">
                                   <div class="col-xl-6 mb-3 ">
                                        <div class="card shadow border-0">
                                             <div class="card-header text-center">
                                                  <img src="./assets/img/Vector-content.png"
                                                       alt="icons-saldo & status member" width="20px">
                                             </div>
                                             <div class="row pb-3 ">
                                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 border-end ">
                                                       <div class="status-saldo">
                                                            <p>Rp. 1.000.000</p>
                                                            <small>SALDO</small>
                                                       </div>
                                                  </div>
                                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                       <div class="status-member">
                                                            <p>VIP</p>
                                                            <small>STATUS MEMBER</small>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="col-xl-6 ">
                                        <div class="card shadow border-0 ">
                                             <div class="card-header text-center">
                                                  <img src="./assets/img/Vector-content2.png"
                                                       alt="icons-total order & total-pendapat" width="20px">
                                             </div>
                                             <div class="row pb-3 ">
                                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 border-end">
                                                       <div class="status-total_order">
                                                            <p>100</p>
                                                            <small>TOTAL ORDER</small>
                                                       </div>
                                                  </div>
                                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                       <div class="status-member">
                                                            <div class="status-total_pendapatan">
                                                                 <p>Rp. 50.000.000</p>
                                                                 <small>TOTAL PENDAPAT</small>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

          `


}