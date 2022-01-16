import React, {createContext, useState} from 'react';

const Context = createContext();
const {Provider, Consumer} = Context;

const InputGroupProvider = (props) => {
    const [containerStyle, setContainerStyle] = useState({});
    return (
        <Provider
            value={{
                containerStyle,
                setContainerStyle,
            }}>
            {props.children}
        </Provider>
    );
};

export {InputGroupProvider, Consumer as InputGroupConsumer, Context as InputGroupContext};
