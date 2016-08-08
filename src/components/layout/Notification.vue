<template>
    <li class="dropdown notifications-menu">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-bell-o"></i>
            <span class="label label-warning">{{size}}</span>
        </a>
        <ul class="dropdown-menu">
            <li class="header">You have {{size}} notifications</li>
            <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                    <li v-for="item in items">
                        <a href="{{item.url}}">
                            <i class="fa fa-{{item.icon || 'clock-o text-bule'}}"></i>
                            {{item.desc}}
                        </a>
                    </li>
                </ul>
            </li>
            <li class="footer"><a href="#" v-click="clickViewAll">View all</a></li>
        </ul>
    </li>
</template>
<script>
    export default{
        props: {
            size: {
                type: Number,
                required: true
            },
            items: {
                type: Array,
                required: true
            }
        },
        components: {
        }
    }
</script>
