import React from 'react';
import { Container } from 'react-bootstrap';

const BikeVideo = () => {
    return (
        // Extra section
        <Container>
            <h1 className='my-5'>Add<span className='text-danger' style={{ fontFamily: 'cursive' }}>Vertise</span></h1>
            <div className="card mb-3 p-3">
                <div className="row g-0">
                    <div className="col-md-6 ">
                        <iframe className="rounded w-100" height="350px" src="https://www.youtube.com/embed/yXB4eXXD0wI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="card-title fw-bold ">
                                Ducati Panigale V4 R - The Sound of Excellence
                                The Ducati Panigale V4 is a sport bike with a 1,103 cc desmodromic 90° V4 engine introduced by Ducati in 2018 as the successor to the V-twin engined 1299
                            </p>
                            <p className="card-text text-muted">
                                A new symphony of all-Italian performance and emotion. The Panigale V4, with 1103 cm3 displacement and 214 HP, is set to become the benchmark for production-line super sports bikes. Watch its first lap on the Mugello racetrack.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BikeVideo;