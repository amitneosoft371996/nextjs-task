export function validateName(name: string) {
    if (!name.trim()) {
        return 'Name is required';
    }
    // You can add more complex validation rules here
    return '';
}

export function validateUsername(username: string) {
    if (!username.trim()) {
        return 'Username is required';
    }
    return '';
}
export function validateEmail(email: string) {
    if (!email.trim()) {
        return  'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        return 'Email is invalid';
    }
    return '';
}
export function validateContactNumber(contactNumber: string) {
    if (!contactNumber.trim()) {
        return  'Contact Number is required';
    } else if (!/^\d{10}$/.test(contactNumber)) {
        return 'Contact Number should be 10 digits';
    }
    return '';
}
export function validatePassword(password: string) {
    if (!password.trim()) {
        return  'Password is required';
    } else if (password.length < 6) {
        return 'Password must be at least 6 characters long';
    }
    return '';
}
export function validatepassword(password: string) {
    if (!password.trim()) {
        return  'Password is required';
    }
    return '';
}
export function validFile(filetype: any, size: number) {
    const extension = filetype.split('/')[1];
    if ((extension !== 'jpg' && extension !== 'jpeg') || size > 1024 * 1024) {
        return 'Invalid file type or size (allowed types: jpg, jpeg, max size: 1MB)';
    }
    return '';
}
