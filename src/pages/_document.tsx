import { Html, Main, Head, NextScript } from 'next/document'
import { getCssText } from 'src/styles'

export default function Document () {
  return (
		<Html>
			<Head>

				<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }}/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
  )
}
