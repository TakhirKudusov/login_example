import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const history = useNavigate();

    useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn');

        isLoggedIn === 'false' && history('/login')
    }, [])

    return <div style={{
        textAlign: 'center',
        marginRight: '150px',
        marginLeft: '150px',
    }}>
        <h1>This is your profile</h1>
        <p>Here you can read actual information about yourself</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Diam maecenas ultricies mi eget mauris pharetra. Massa tincidunt dui ut ornare lectus sit amet. Volutpat consequat mauris nunc congue. Velit euismod in pellentesque massa placerat duis. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra convallis posuere morbi leo urna molestie at. Est placerat in egestas erat imperdiet sed euismod nisi porta.
            Et netus et malesuada fames ac turpis egestas. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Posuere ac ut consequat semper viverra. Tortor at auctor urna nunc id. Id volutpat lacus laoreet non. Diam phasellus vestibulum lorem sed risus. Nisi scelerisque eu ultrices vitae auctor eu. Cras pulvinar mattis nunc sed. Habitant morbi tristique senectus et netus et. Ipsum nunc aliquet bibendum enim facilisis gravida. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Id ornare arcu odio ut sem nulla pharetra diam sit.
        </p>
    </div>
}