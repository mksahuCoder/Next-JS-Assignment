import React from 'react'
import style from "@/app/page.module.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rating from '@mui/material/Rating';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Button from '@mui/material/Button';

const page = () => {
  return (
    <div className={style.main}>
      <Container className={style.subMain}>
        <h1 className={style.heading}>Leave a review</h1>
        <Row>
          <Col md={6}>
            <h2 className={style.subHead}>Safety</h2>
            <p className={style.para}>Material UI is an open-source React component library</p>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Col>
          <Col md={6}>
            <h2 className={style.subHead}>Communication</h2>
            <p className={style.para}>Material UI is an open-source React component library</p>
            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
          </Col>

        </Row>
        <Row>
          <h2 className={style.subHead}>Would you recommend this?</h2>
          <p className={style.para}>Material UI is an open-source React component library</p>
          <div>

            <Button className={style.down} startIcon={<ThumbDownIcon />}>
              No
            </Button>

            <Button className={style.up} startIcon={<ThumbUpIcon />}>
              Yes
            </Button>
          </div>
        </Row>

      </Container>
    </div>
  )
}

export default page