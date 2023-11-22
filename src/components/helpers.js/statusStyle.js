export default function status(st){
    if (st === 'përfunduar'){
        return 'secondary'
    }
    if (st === 'gati'){
        return 'success'
    }
    if (st === 'në proces'){
        return 'warning'
    }
    if (st === 'nuk rregullohet'){
        return 'danger'
    }
    if (st === 'new'){
        return 'primary'
    }
}