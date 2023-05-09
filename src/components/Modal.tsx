import { useModal } from '../store/temporal/useModal'

function Modal (): JSX.Element {
  const { modalConfig } = useModal()

  return (
    <>
      {/* Button trigger modal */}
      <button
        id='launchModal' type='button' className='btn d-none'
        data-bs-toggle='modal' data-bs-target='#staticBackdrop'
      >
        Launch modal
      </button>

      {/* Modal */}
      <div
        className='modal fade' id='staticBackdrop' data-bs-backdrop='static'
        // @ts-expect-error
        data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content border-0 py-4 px-3'>
            <div className='d-block'>
              <h1 className='modal-title fs-5 text-center' id='staticBackdropLabel'>
                {modalConfig.msg}
              </h1>
            </div>

            <div className='d-block mx-auto pt-4'>
              <div className='d-flex'>
                <button type='button' className='btn btn-secondary mx-2' data-bs-dismiss='modal'>Close</button>
                {modalConfig.showBtn
                  ? (
                    <button
                      type='button' className='btn btn-danger mx-2'
                      data-bs-dismiss='modal' onClick={() => modalConfig.action()}
                    >
                      Continue
                    </button>
                    )
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
