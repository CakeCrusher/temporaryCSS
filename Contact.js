import React from 'react'
import { Link } from 'next/link'
import contStyle from '../styles/pages/contact.module.css'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {setToken} from '../redux/reducers/token'
import {FIND_USER, ALL_POSTS} from '../src/schemas/queries'
import {apolloClient} from '../lib/apollo'
import Contributer from '../components/Contributer'
import Layout from '../components/Layout'

const Contact = (props) => {

    return (
        <Layout>
            <div className="navbar-height" />
            <div className={contStyle.contactsContainer}>
                <Contributer
                    name="Sebastian Sosa"
                    link="/user/SebastianSosa"
                    image="https://i.imgur.com/zgwIwOS.png"
                    position="founder, full stack developer"
                    email="1sebastian1sosa1@gmail.com"
                    phone="+1 786-270-7297"
                />
                <Contributer
                    name="Umyarov Mikhail"
                    link="/user/nesutortik"
                    image="https://i.imgur.com/ew81eQe.png"
                    position="UI/UX designer"
                    email="silverusdragonitos@yandex.ru"
                    phone="+7 952-156-96-49"
                />
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => {
	return {
        
	}
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default Contact