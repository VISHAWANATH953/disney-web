import Document, { Html, Main, NextScript } from 'next/document'
import Header from '../Compoments/Header'
class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Header />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument