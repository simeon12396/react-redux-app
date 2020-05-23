import React from 'react';
import Footer from '../Footer/Footer';
import Drawer from '../Drawer/Drawer';

const MainLayout = ({children}) => {
    return(
        <>
            <Drawer>
                <main>
                    {children}
                </main>
            </Drawer>
            
            <Footer />
        </>
    );
};

export default MainLayout;