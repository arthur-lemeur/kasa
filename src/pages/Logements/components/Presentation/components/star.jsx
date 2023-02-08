import StarColored from '../../../../../assets/star-colored.svg'
import StarGrey from '../../../../../assets/star-grey.svg'

export function StarRed() {


    return (
        <img src={StarColored} alt="rating"/>
    )
}
export function StarEmpty() {

    return (
        <img src={StarGrey} alt="rating"/>
    )
}
