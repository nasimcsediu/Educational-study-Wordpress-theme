<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'eduction1');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8[uW*%ayl!HnHD%$Rn,Vg6-|%i[y|B@m!2ng*7M%7;QX;{9QHcq6]7frj9F_-M0u');
define('SECURE_AUTH_KEY',  '$_;FZP+W[aUm1 30C&bsf(w>pd=0dd/>9(0Mdo`USUUx}TLsbWny2mnA%2edI{~?');
define('LOGGED_IN_KEY',    'VVe4=m;9~UAjl#)Go<)^&W66`P8J29o6K!DCv^:/>j]@~D6V%)2=3J~AZ!2<1[Ut');
define('NONCE_KEY',        'ejg=Ec3chLe$xD5Cy=c*z)HXG)8TbTxA]V/{eq7&R6pBKLD>gvUxuO3,bRp10<}!');
define('AUTH_SALT',        '[hl(`:a$LzVJdZ?oG9n9XBq,;w].zJb-?U9~G/t:9ik`E.T8q|jAH3`Fy2~lUO$&');
define('SECURE_AUTH_SALT', 'OQub8e-@vcDWzMYv}vgz/.sPX{q(dsKMQmi+j: ^4JXHo{K`^+MS:U:lE?jPc(D~');
define('LOGGED_IN_SALT',   'E#NB`5}iqJ2AJ|.b.[;%Hc iv3T{w]~y&<2~1~jVH>jm3^4t9U[8|lv%WDmmH;D#');
define('NONCE_SALT',       'LmdEOP`JqJ|]1j<Bslvc6JH0M.9te2IW,1K[8LB}&nC#^:Y(?;Fj19Roc!Urh4kj');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
