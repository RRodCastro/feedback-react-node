module.exports = (survey) => {

    const { title, subject, body } = survey;
    return (
        '<div>'
           + body +
        '</div>'
    );
}