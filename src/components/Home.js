import React from 'react'
import './home.css'

class HomeComponent extends React.Component{
	render() {
		return (
			  <div>
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="first-slide" src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80" alt="First slide"/>
                    <div className="container">
                        <div className="carousel-caption text-left text-danger">
                            <h1 className="myfont1">CREATE TODO.</h1>
                            <p>Create Todo with checklist ,notes and much more.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="second-slide" src="" alt="Second slide"/>
                    <div className="container">
                        <div className="carousel-caption text-warning">
                            <h1 >Add Events.</h1>
                            <p>Save your events to calender.</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="third-slide" src="https://images.pexels.com/photos/1020323/pexels-photo-1020323.jpeg" alt="Third slide"/>
                    <div className="container">
                        <div className="carousel-caption text-right text-warning">
                            <h1 className="myfont">Add Events .</h1>
                            <p>Save your events to calender.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" ></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" ></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom"></div>
  </div>
</div>
       
        <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-note m-auto icon-c"></i>
            </div>
            <h3>TODO</h3>
            <p className="lead mb-0">Create todo in categories, Add Simple todo, Checklist, Notes and much more!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-calendar m-auto icon-c"></i>
            </div>
            <h3>Event</h3>
            <p className="lead mb-0">Add your event to calender, so that you never miss your important meetings!</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-check m-auto icon-c"></i>
            </div>
            <h3>Get Notified</h3>
            <p className="lead mb-0">Our chrome extension will always make you remind about todo and events!</p>
          </div>
        </div>
         <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-magnifier m-auto icon-c"></i>
            </div>
            <h3>Search</h3>
            <p className="lead mb-0">Created Many todos , dont worry you can use search to display specific list!</p>
          </div>
        </div>
         <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-emotsmile m-auto icon-c"></i>
            </div>
            <h3>Easy</h3>
            <p className="lead mb-0">Our UI is user friendly, so anyone can our service to mark your schedule!</p>
          </div>
        </div>
         <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <i className="icon-clock m-auto icon-c"></i>
            </div>
            <h3>Due Dates</h3>
            <p className="lead mb-0">Add due dates to your todo's , so you never miss it and get remind from us !</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer id="sticky-footer" className="py-4 text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Checklist</small>
    </div>
  </footer>

  </div>
		);
	}
}

export default HomeComponent;