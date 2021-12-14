const EditForm = () => {
    const onSubmitHandler = (e) => {

    }

    const onChangeHandler = () => {}

    return (
        <div className="form">
            <h2>Edit Recipe</h2>
            
            <form onSubmit={onSubmitHandler}>
                <div className="form__body">
                    <div className="form__row">
                        <label htmlFor="imageUrl">image url</label>

                        <input type="file" onChange={onChangeHandler} name="imageUrl" id="imageUrl" accept="image/png, image/jpeg" />
                    </div>

                    <div className="form__row">
                        <label htmlFor="title">Title</label>

                        <input type="title" name="title" id="title" />
                    </div>

                    <div className="form__row">
                        <label htmlFor="description">Description</label>

                        <textarea type="description" name="description" id="description" />
                    </div>
                </div>

                <div className="form__actions">
                    <button className="btn">
                        Submit
                    </button>
                </div>
            </form>        
        </div>
    );
}

export default EditForm;