export default function Information() {
  return (
    <>
      <section className="py-5 ">
        <div className="container">
          <div className="row gx-10 ">
            <aside className="col-lg-6 imgpro">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                >
                  <img className="rounded-4" src="cf4phinsuada.png" />
                </a>
              </div>
            </aside>
            <main className="col-lg-6 ">
              <div className="ps-lg-5">
                <h4 className="title text-dark">Cà phê Phindi Sữa Đá</h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="ms-1">Ngon sánh mịn</span>
                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1"></i>Không thể cưỡng 
                  </span>
                  <span className="text-success ms-2">Uống là tỉnh</span>
                </div>

                <div className="mb-3">
                  <span className="h5">$9.000</span>
                  <span className="text-muted">/ly</span>
                </div>

                <p>Thông tin sản phẩm:(Loại Cà phê Phin)</p>

                <div className="row">
                  <dt className="col-3">Type</dt>
                  <dd className="col-9">Cà phê</dd>

                  <dt className="col-3">Type</dt>
                  <dd className="col-9">Phindi</dd>

                  <dt className="col-3">Materials</dt>
                  <dd className="col-9">Hot/Cold</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Cà Phê Culi</dd>
                </div>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select className="form-select border border-secondary">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                    </select>
                  </div>

                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Số Lượng</label>
                    <div className="input-group mb-3">
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus"></i>
                      </button> 
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder="20"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="btn btn-primary border border-secondary shadow-0"
                >
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#" className="btn btn-warning shadow-0">
                  {" "}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </a>
                <a
                  href="#"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3"
                >
                  {" "}
                  <i className="me-1 fa fa-heart fa-lg"></i> Save{" "}
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
