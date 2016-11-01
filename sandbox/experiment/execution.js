import experience from '../../experience'

const wrapperId = 'wrappedComponent'

function execution () {
  experience.onReactReady((React) => {
    class Notice extends React.Component {
      render () {
        return <h2>Replaced</h2>
      }
    }

    const notice = experience.register(wrapperId, (props, React) => {
      return <Notice />
    })

    setTimeout(notice.dispose, 2000)
  })
}

export default execution
