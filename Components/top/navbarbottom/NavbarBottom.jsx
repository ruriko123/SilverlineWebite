import React,{useEffect,useState} from 'react'
import 'rsuite/dist/rsuite.min.css';
import {Panel, Placeholder} from 'rsuite';
import "./NavbarBottom.scss"
import {Animation, List, Whisper, Button, ButtonToolbar} from 'rsuite';



const Overlay = React.forwardRef(({
    style,
    onClose,
    ...rest
}, ref) => {
    const styles = {
        ...style,
        color: '#000',
        background: '#fff',
        width: 200,
        padding: 10,
        borderRadius: 4,
        position: 'absolute',
        border: '1px solid #ddd',
        boxShadow: '0 3px 6px -2px rgba(0, 0, 0, 0.6)'
    };

    return (
        <div {...rest} style={styles} ref={ref}>
            <List hover>
                <List.Item href="/service1">Service1</List.Item>
                <List.Item href="/service2">Service2</List.Item>
                <List.Item href="/service3">Service3</List.Item>
                <List.Item href="/service4">Service4</List.Item>
            </List>
        </div>
    );
});

function NavbarBottom() {




    return (
        <div className="d-flex justify-content-center m-2 align-items-center">
            <Panel shaded={true} bodyFill={false} className="rounded">
                <Animation.Slide   transitionAppear={false} in={true} placement="bottom" timeout={1400} >
                <h1 className="text-black text-4xl font-bold uppercase relative inline-block">
                    Text Effect 1
                </h1>
                </Animation.Slide>

                <h3 className='second-title'>Premium Storage Space and Storage Solutions</h3>
                <Animation.Slide transitionAppear={false} in={true} placement="bottom" timeout={1400}>
                <h4 className='third-title'>Built for Individuals, Startups, e-Commerce & Companies</h4>
                </Animation.Slide>
                
                <ButtonToolbar
                    style={{
                    background: 'transparent',
                    padding: 10
                }}
                    className='rounded'>
                    <Whisper
                        placement='auto'
                        trigger="focus"
                        speaker={(props, ref) => {
                        const {className, left, top, onClose} = props;
                        return <Overlay
                            style={{
                            left,
                            top
                        }}
                            onClose={onClose}
                            className={className}
                            ref={ref}/>;
                    }}>
                        <Button color="violet" appearance="primary">
                            Explore our services
                        </Button>
                    </Whisper>
                </ButtonToolbar>
            </Panel>

        </div>
    )

}

export default NavbarBottom