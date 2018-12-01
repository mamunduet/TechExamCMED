<%--
    Document   : header
    Created on : Nov 28, 2018, 2:40:14 PM
    Author     : mamun
--%>

<div class="page-header-top">
    <div class="container">
        <!-- BEGIN LOGO -->
        <div class="page-logo">
            <a href="Welcome.do">
                <img src="<%=resourceURL%>/assets/layouts/layout3/img/logo.jpg" alt="logo" class="logo-default">
            </a>
        </div>
        <!-- END LOGO -->
        <!-- BEGIN RESPONSIVE MENU TOGGLER -->
        <a href="javascript:;" class="menu-toggler"></a>
        <!-- END RESPONSIVE MENU TOGGLER -->
        <!-- BEGIN TOP NAVIGATION MENU -->
        <div class="top-menu">
            <ul class="nav navbar-nav pull-right">
                <!-- BEGIN USER LOGIN DROPDOWN -->
                <li class="dropdown dropdown-user dropdown-dark">
                    <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <img alt="" class="img-circle" src="<%=resourceURL%>/assets/layouts/layout3/img/avatar.png">
                        <span class="username username-hide-mobile">
                            <%=loginDTO.getUserName()%>
                        </span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-default">
                        <!--   <li class="users">  active class go here
                               <a href="#usersListInfo.do">
                                   <i class="icon-users"></i> Admin Users </a>
                           </li>
                           <li class="divider"> </li> -->

                        <li class="divider"> </li>
                        <li>
                            <a href="logout.do">
                                <i class="icon-key"></i> Log Out </a>
                        </li>
                    </ul>
                </li>
                <!-- END USER LOGIN DROPDOWN -->
            </ul>
        </div>
        <!-- END TOP NAVIGATION MENU -->
    </div>
</div>