const IconButton = props => {
    const { icon, text, ...other } = props;
    const TagName = icon;

    return (
        <span className="iconBtn" {...other}>
            <TagName />
            {text}
        </span>
    );
  };
  
export default IconButton