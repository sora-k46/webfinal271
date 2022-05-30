import React from 'react'
import { CardText, Card, CardTitle, CardImg, CardBody } from 'reactstrap'

function AboutPage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className='mt-5'>About me</h2>
          <hr />
          <div className="col-12 col-md-6">
            <Card className='bg-danger text-center m-5 p-5'>
              <img src="assets/images/avatar.png" alt="avatar" width='200px' style={{ borderRadius: '20px', alignSelf: 'center' }} />
              <CardTitle tag="h4" className='mt-5' >Sorrawit Kwanja</CardTitle>
              <blockquote style={{ fontStyle: 'italic' }}>
                Never give up
              </blockquote>
            </Card>
          </div>
          <div className="col-12 col-md-6">
            <Card className='bg-success text-center m-5 p-5'>
              <CardTitle tag="h4" >Sorrawit Kwanja : Education</CardTitle>
              <CardImg src='assets/images/edu.webp' alt='education' style={{ width: '150px', alignSelf: 'center', marginTop: '10px' }} />
              <CardTitle className='mt-3'>
                <h5>University</h5>
                My name is Sorrawit Kwanja. I study in King Mongkut's University of Technology Thonburi, Majoring in Computer Science in School of Technology Information
              </CardTitle>
              <CardTitle className='mt-3'>
                <h5>High School</h5>
                I was studied in Demonstration School of Mahasarakham University in Math and Science Gifted Program.
              </CardTitle>
              <CardTitle className='mt-3'>
                <h5>Middle School</h5>
                I was studied in Mukdahan School in Mini English Program.
              </CardTitle>
              <CardTitle className='mt-3'>
                <h5>Elementary School</h5>
                I was in Anuban Mukdahan for Elementary School.
              </CardTitle>
            </Card>
          </div>
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <h2 className='mt-5'>My favorite Subjects</h2>
            <hr />
            <div className="col-12 col-md-6">
              <Card className='bg-warning my-3 p-3 text-center'>
                <CardTitle tag="h5">Mathematics</CardTitle>
                <CardImg src='assets/images/math.webp' alt='math' className='my-5' style={{ width: '200px', alignSelf: 'center' }} />
                <CardText>
                  I like Mathematics because Math is foundation of Physics and it is very fun to solve math problems.
                </CardText>
                <CardTitle tag="h5">Physics</CardTitle>
                <CardImg src='assets/images/physics.webp' alt='physics' className='my-5' style={{ width: '200px', alignSelf: 'center' }} />
                <CardText>
                  I like Physics with the same reason I like Mathematics. Physics is like math but it can describe a real world events. It also easier than Math to see the big picture of what topic you're study.
                </CardText>
                <CardTitle tag="h5">Biology</CardTitle>
                <CardImg src='assets/images/bio.webp' alt='biology' className='my-5' style={{ width: '200px', alignSelf: 'center' }} />
                <CardText>
                  I like biology because it is more about memorizing the concept than solving problems and you don't have to think a lot like Math and Physics.
                </CardText>
              </Card>
            </div>
          </div>
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <h2 className='mt-5'>My favorite Movies</h2>
            <hr />
            <div className="col-12 col-md-6">
              <Card className='bg-warning my-3 p-5 text-center'>
                <CardTitle tag="h5">Parasite</CardTitle>
                <a href="https://www.youtube.com/watch?v=Q38h5XD4RKE" target='_blank'>
                  <CardImg src='assets/images/parasite.jpg' alt='movie parasite' className='my-5' style={{ width: '200px', alignSelf: 'center' }} />
                </a>
                <CardText>
                  A 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who co-wrote the screenplay with Han Jin-won. The film, starring Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin, and Lee Jung-eun, follows a poor family who scheme to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.
                </CardText>
                <a href="https://www.youtube.com/watch?v=B6EZycjTHgo" target='_blank'>
                  <CardImg src='assets/images/train2busan.webp' alt='movie train to busan' className='my-5' style={{ width: '200px', alignSelf: 'center' }} />
                </a>
                <CardTitle tag="h5">Train to Busan</CardTitle>
                <CardText>
                  A 2016 South Korean action horror film[4] directed by Yeon Sang-ho and starring Gong Yoo, Jung Yu-mi, Ma Dong-seok, Kim Su-an, Choi Woo-shik, Ahn So-hee and Kim Eui-sung.[5] The film mostly takes place on a high-speed train from Seoul to Busan as a zombie apocalypse suddenly breaks out in the country and threatens the safety of the passengers.
                </CardText>
                <a href="https://www.youtube.com/watch?v=IHVzzxrPt1c" target='_blank'>
                  <CardImg src='assets/images/vforven.jpg' alt='movie v for vendetta' className='my-5' style={{ width: '200px', alignSelf: 'center' }} />
                </a>
                <CardTitle tag="h5">V for Vendetta</CardTitle>
                <CardText>
                  A 2005 dystopian political action film directed by James McTeigue (in his feature directorial debut) from a screenplay by the Wachowskis.[a] It is based on the 1988 DC Vertigo Comics limited series of the same title by Alan Moore and David Lloyd. The film is set in a future where a fascist totalitarian regime has subjugated the UK. It centres on V (portrayed by Hugo Weaving), an anarchist and masked freedom fighter who attempts to ignite a revolution through elaborate terrorist acts, and Evey Hammond (portrayed by Natalie Portman) a young woman caught up in V's mission. Stephen Rea portrays a detective leading a desperate quest to stop V.
                </CardText>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage