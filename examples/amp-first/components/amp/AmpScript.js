import PropTypes from 'prop-types'
import React from 'react'
import { AmpIncludeAmpScript } from './AmpCustomElement'

/**
 * Embeds an AMP Script by either linking to a JS `src` file or embedding inline
 * AMP Script via the `script` property. The inline script hash will automatically
 * be generated by AMP Optimizer.
 *
 * @param {Props} props
 */
export default function AmpScript (props) {
  return (
    <>
      <AmpIncludeAmpScript />
      <amp-script
        id={props.id}
        layout={props.layout}
        width={props.width}
        height={props.height}
        script={props.id}
        src={props.src}
      >
        {props.children}
      </amp-script>
      {props.script && (
        <script
          id={props.id}
          type='text/plain'
          target='amp-script'
          dangerouslySetInnerHTML={{ __html: props.script }}
        />
      )}
    </>
  )
}

AmpScript.propTypes = {
  id: PropTypes.string,
  layout: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  script: PropTypes.string,
  src: PropTypes.string
}
