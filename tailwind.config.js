module.exports = {
    content: ['./resources/views/**/*.blade.php'],
    darkMode: 'media',
    theme: {
        screens: {
            'xs': '375px',
            'sm': '540px',
            'md': '720px',
            'lg': '960px',
            'xl': '1140px',
            '2xl': '1550px'
        },
        container: {
            center: true,
            padding: '20px',
        },
        fontSize: {
            'xxs': ['14px', '1.6em'],
            'xs': ['16px', '1.6em'],
            'sm': ['18px', '1.6em'],
            'md': ['20px', '1.45em'],
            'lg': ['26px', '1.3em'],
            'xl': ['36px', '1.3em'],
            '2xl': ['64px', '1.1em'],
            '3xl': ['96px', '1.1em']
        },
        extend: {
            colors: {
                white: '#fff',
                purple: '#7843e9',
                pink: '#ec4176',
                dark: '#222',
                gray: '#454545',
                darkblue: '#1e1f43',
                body: '#bdbeca',
                card: '#323359'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ]
}
