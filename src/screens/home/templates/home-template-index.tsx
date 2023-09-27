/**
 * Home Screen Template
 *
 * @screen
 */


import { Loader } from '@atoms'

import type { TemplateProps } from '@props/screen'

const HomeScreenTemplate = ({ children, loading = true }: TemplateProps): JSX.Element => loading ?
  (<Loader.ActivityIndicator />) : (
    <>
      {children}
    </>
  )

export default HomeScreenTemplate
