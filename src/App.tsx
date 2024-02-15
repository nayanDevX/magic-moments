import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import mockServer from './mock'
import appConfig from '@/configs/app.config'
import './locales'
import config from './aws-exports'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import { fetchAuthSession } from 'aws-amplify/auth'
import '@aws-amplify/ui-react/styles.css'

const environment = process.env.NODE_ENV

Amplify.configure(config, {
    API: {
        REST: {
            headers: async () => {
                const accessToken = (
                    await fetchAuthSession()
                ).tokens?.idToken?.toString()
                return {
                    Authorization: accessToken ?? '',
                }
            },
        },
    },
})

/**
 * Set enableMock(Default false) to true at configs/app.config.js
 * If you wish to enable mock api
 */
if (environment !== 'production' && appConfig.enableMock) {
    mockServer({ environment })
}
function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Authenticator
                        components={{
                            Header: () => (
                                <div
                                    style={{
                                        marginTop: '20vh',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <h1 className=" text- pb-4 font-semibold text-center w-full text-blue-600">
                                        MyMoments
                                    </h1>
                                </div>
                            ),
                        }}
                    >
                        <Theme>
                            <Layout />
                        </Theme>
                    </Authenticator>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
